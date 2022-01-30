const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const modelProducts = require('../../models/modelProducts');
const modelSales = require('../../models/modelSales');
const modelSalesProducts = require('../../models/modelSalesProducts');

describe('Insere um novo produto no BD na tabela "Products"', () => {

  const produto = {
     name: 'Bielô',
     quantity: 50,
  };

      before(async () => {
        const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

        sinon.stub(connection, 'execute').resolves(execute);
      });

      // Restauraremos a função `execute` original após os testes.
      after(async () => {
        connection.execute.restore();
      });

   describe('quando é inserido com sucesso um produto', () => {

     it('retorna um objeto', async () => {
       const response = await modelProducts.createProduct(produto.name, produto.quantity);

       expect(response).to.be.a('object');
     });

     it('tal objeto possui o "id" do novo produto inserido', async () => {
      const response = await modelProducts.createProduct(produto.name, produto.quantity);

       expect(response).to.have.a.property('id');
     });

   });

});

describe('Busca todos os produtos no BD', () => {

  const produtos = [
    {
    id: 1,
    name: "tg",
    quantity: 0,
    },
    {
    id: 2,
    name: "bibelo",
    quantity: 100,
    },
    {
    id: 3,
    name: "caixa",
    quantity: 90,
    },
    {
    id: 4,
    name: "bibelo",
    quantity: 100,
    }];

      before(async () => {
        const execute = [produtos, []]; 

        sinon.stub(connection, 'execute').resolves(execute);
      });

      after(async () => {
        connection.execute.restore();
      });


    it(`quando fazemos uma requisição GET para /products 
    retorna a lista de produtos com as seguintes caracteristicas`, async () => {
      const response = await modelProducts.getColumn('*');

     response.forEach((obj) =>{
       expect(obj).to.be.a('object');
       expect(obj).to.have.a.property('id');
       expect(obj).to.have.a.property('name');
       expect(obj).to.have.a.property('quantity');
     });

    });
});

describe('Busca produto por um "id" específico', () => {

  const produto = [
    {
    id: 3,
    name: "caixa",
    quantity: 90,
    },
  ];

  const id = produto[0].id;

      before(async () => {
        const execute = [produto, []]; 

        sinon.stub(connection, 'execute').resolves(execute);
      });

      after(async () => {
        connection.execute.restore();
      });


    it(`quando fazemos uma requisição GET para /products/3
    retorna a lista de produto com as seguintes caracteristicas`, async () => {
      const response = await modelProducts.getById(id);

       expect(response[0]).to.be.a('object');
       expect(response[0]).to.have.a.property('id');
       expect(response[0]).to.have.a.property('name');
       expect(response[0]).to.have.a.property('quantity');
       expect(response).to.be.length(1);

    });
});

describe('Insere um venda na tabela "sales"', () => {
     before(async () => {
       const execute = [{ insertId: 1 }]; 

       sinon.stub(connection, 'execute').resolves(execute);
     });

     after(async () => {
       connection.execute.restore();
     });


     it('retorna um objeto', async () => {
      const response = await modelSales.createSales();

      expect(response).to.be.a('number');
    });

    it('tal objeto possui o "id" da nova venda inserida', async () => {
      const response = await modelSales.createSales();

      expect(response).to.be.equal(1);
    });
});

describe('Busca todas "sales" no banco de dados', async() => {

  const sales = [
    {
      id: 1,
      date: "2022-01-29T20:05:50.000Z",
      },
      {
      id: 2,
      date: "2022-01-29T20:06:20.000Z",
      },
      {
      id: 3,
      date: "2022-01-29T20:08:24.000Z",
      },
      {
      id: 4,
      date: "2022-01-29T20:08:35.000Z",
      },
      {
      id: 5,
      date: "2022-01-29T20:08:44.000Z",
      },
      {
      id: 6,
      date: "2022-01-29T20:08:46.000Z",
      },
      {
      id: 7,
      date: "2022-01-29T20:08:48.000Z",
      }, 
  ];

      before(async () => {
        const execute = [sales, []]; 

        sinon.stub(connection, 'execute').resolves(execute);
      });

      after(async () => {
        connection.execute.restore();
      });

      const response = await modelSales.getSales();
     response.forEach((obj) =>{
       expect(obj).to.be.a('object');
       expect(obj).to.have.a.property('id');
       expect(obj).to.have.a.property('date');
     });

});

describe('Busca todos os produtos vendidos no BD', () => {

  const sales = [
    {
    saleId: 1,
    date: "2022-01-29T20:05:50.000Z",
    product_id: 1,
    quantity: 10
    },
    {
    saleId: 2,
    date: "2022-01-29T20:06:20.000Z",
    product_id: 1,
    quantity: 10
    },
    {
    saleId: 3,
    date: "2022-01-29T20:08:24.000Z",
    product_id: 1,
    quantity: 10
    },
    {
    saleId: 4,
    date: "2022-01-29T20:08:35.000Z",
    product_id: 1,
    quantity: 10
    },
    {
    saleId: 5,
    date: "2022-01-29T20:08:44.000Z",
    product_id: 1,
    quantity: 10
    },
    {
    saleId: 6,
    date: "2022-01-29T20:08:46.000Z",
    product_id: 1,
    quantity: 10
    }
  ];

      before(async () => {
        const execute = [sales, []]; 

        sinon.stub(connection, 'execute').resolves(execute);
      });

      after(async () => {
        connection.execute.restore();
      });


    it(`quando fazemos uma requisição GET para /sales 
    retorna a lista de vendas com as seguintes caracteristicas`, async () => {
      const response = await modelSalesProducts.getAllSalesAndProducts()

     response.forEach((obj) =>{
       expect(obj).to.be.a('object');
       expect(obj).to.have.a.property('saleId');
       expect(obj).to.have.a.property('date');
       expect(obj).to.have.a.property('product_id');
       expect(obj).to.have.a.property('quantity');
       expect(response).to.be.length(6);
      
     });

    });
});

    describe('Busca uma venda específica', () => {

      const sale = [
        {
        date: "2022-01-29T20:06:20.000Z",
        product_id: 1,
        quantity: 10,
        },
        {
        date: "2022-01-29T20:06:20.000Z",
        product_id: 3,
        quantity: 5,
        },
      ]

    
          before(async () => {
            const execute = [sale, []]; 
    
            sinon.stub(connection, 'execute').resolves(execute);
          });
    
          after(async () => {
            connection.execute.restore();
          });
    
    
        it(`quando fazemos uma requisição GET para /sales/2
        retorna a lista de produto com as seguintes caracteristicas`, async () => {
          const response = await modelSalesProducts.getSalesAndProductsById(2)
          response.forEach((obj) =>{
            expect(obj).to.be.a('object');
            expect(obj).to.have.a.property('date');
            expect(obj).to.have.a.property('product_id');
            expect(obj).to.have.a.property('quantity');
            expect(response).to.be.length(2);
           
          });
    
        });
    });
