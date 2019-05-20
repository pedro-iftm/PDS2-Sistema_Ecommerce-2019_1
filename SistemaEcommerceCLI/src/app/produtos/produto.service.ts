import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Produto } from './produto';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProdutosService {

  private url: string = "http://localhost:8080/produtos";

  produtosChanged = new EventEmitter<Observable<Produto[]>>();

  constructor(private http: Http) { }

  getAll(): Observable<Produto[]> {
    return this.http.get(this.url)
            .map(res => res.json())
            .catch(this.handleError);         
  }

  private handleError(error: any) {
    let erro = error.messsage || 'Server error';
    console.error('Ocorreu um erro ',error);
    return Observable.throw(erro);
  }

  add(produto: Produto) {
    return this.http.post(this.url,JSON.stringify(produto),
    {headers: this.getHeaders()})
    .do(data => this.produtosChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  update(produto: Produto) {
    return this.http.put(this.url,JSON.stringify(produto),
    {headers: this.getHeaders()})
    .do(data => this.produtosChanged.emit(this.getAll()))
    .catch(this.handleError);
  }

  remove(id: number) {
    return this.http.delete(this.getUrl(id),
           {headers: this.getHeaders()})
           //.map(res => res.json())
           .do(data => this.produtosChanged.emit(this.getAll()))
           .catch(this.handleError);
  }

  get(id: number) {
    return this.getAll()
           .map((list: any) => list.find(produto => produto.codigo == id))
           .catch(this.handleError);
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return headers;
  }

  private getUrl(id: number) {
    return `${this.url}/${id}`;
  }







}
