import React from 'react';
import ReactDOM from 'react-dom';
import {createServer,Model} from 'miragejs';
import {App} from './App';

createServer({
  models:{
    transaction:Model,
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'Freelancer de Website',
          type:'deposit',
          amount:6000,
          category:'Dev',
          createAt:new Date('2021-02-12 09:00:00'),
        },
        {
          id:2,
          title:'Aluguel',
          type:'withdraw',
          amount:2000,
          category: 'Casa',
          createAt:new Date('2021-08-09 19:00:00'),
        },
        {
          id:3,
          title:'Dentista',
          type:'withdraw',
          amount:90,
          category: 'Desp.Medicas',
          createAt:new Date('2020-05-12 12:40:00'),
        },
      ]
    })
  },

  routes(){
    this.namespace= "api"; 
    this.get('/transactions',()=>{
      return this.schema.all('transaction')
    })
    this.post('/transactions',(schema, request)=>{
      const data= JSON.parse(request.requestBody)
      return schema.create('transaction',data)

    })
  }
})



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


