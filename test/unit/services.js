const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const servicesProducts = require('../../services/servicesProducts')
const serviceSales = require('../../services/serviceSales')
const modelProducts = require('../../models/modelProducts');
const modelSales = require('../../models/modelSales');
const modelSalesProducts = require('../../models/modelSalesProducts');

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
        const execute = produtos; 

        sinon.stub(modelProducts, 'getColumn').resolves(execute);
      });

      after(async () => {
        modelProducts.getColumn.restore();
      });


    it(`quando fazemos uma requisição GET para /products 
    retorna a lista de produtos com as seguintes caracteristicas`, async () => {
      const response = await servicesProducts.getColumn('*');

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

  before(async () => {
    const execute = produto; 

    sinon.stub(modelProducts, 'getById').resolves(execute);
  });

  after(async () => {
    modelProducts.getById.restore();
  });


    it(`quando fazemos uma requisição GET para /products/3
    retorna a lista de produto com as seguintes caracteristicas`, async () => {
      const response = await servicesProducts.getById(3);

       expect(response[0]).to.be.a('object');
       expect(response[0]).to.have.a.property('id');
       expect(response[0]).to.have.a.property('name');
       expect(response[0]).to.have.a.property('quantity');
       expect(response).to.be.length(1);

    });
});

describe('cria uma venda', () => {
  const id = 1; 
  const array =   [
    {
      product_id: 1,
      quantity: 2,
    },
    {
      product_id: 2,
      quantity: 5,
    },
  ];

  const retornoEsperado =   {
    id: 1,
    itemsSold: [
      {
        product_id: 1,
        quantity: 2,
      },
      {
        product_id: 2,
        quantity: 5,
      },
    ],
  };

  before(async () => {
    sinon.stub(modelSales, 'createSales').resolves(id);
    sinon.stub(modelSalesProducts, 'createSalesProducts').getCalls(2);
  });

  after(async () => {
    modelSales.createSales.restore();
    modelSalesProducts.createSalesProducts.restore();
  });


  it('retorna um objeto', async () => {
   const response = await serviceSales.createSalesProducts(array);

    expect(response).to.be.a('object');
    expect(response).to.have.a.property('id');
    expect(response).to.have.a.property('itemsSold');
    expect(response.itemsSold[0]).to.have.a.property('product_id');
    expect(response.itemsSold[0]).to.have.a.property('quantity');
    expect(response.itemsSold).to.be.length(2); });

});

describe('teste função getAllSalesAndProducts', () => {

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
    sinon.stub(modelSalesProducts, 'getAllSalesAndProducts').resolves(sales);
  });

  after(async () => {
    modelSalesProducts.getAllSalesAndProducts.restore();
  });


  it('retorna um objeto', async () => {
   const response = await serviceSales.getAllSalesAndProducts();
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

describe('testa função getSalesAndProductsById', () => {

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
    sinon.stub(modelSalesProducts, 'getSalesAndProductsById').resolves(sale);
  });

  after(async () => {
    modelSalesProducts.getSalesAndProductsById.restore();
  });


  it('retorna um objeto', async () => {
   const response = await serviceSales.getSalesAndProductsById(2);
    response.forEach((obj) =>{
      expect(obj).to.be.a('object');
      expect(obj).to.have.a.property('date');
      expect(obj).to.have.a.property('product_id');
      expect(obj).to.have.a.property('quantity');
      expect(response).to.be.length(2);
     
    });
  });
});

describe('testa função updateSalesProducts', () => {
  const array = [
    {
      product_id: 1,
      quantity: 6,
    },
  ];

  before(async () => {
    sinon.stub(modelSalesProducts, 'updateSalesProducts').getCall(1);
  });

  after(async () => {
    modelSalesProducts.updateSalesProducts.restore();
  });


  it('retorna um objeto', async () => {
   const response = await serviceSales.updateSalesProducts('2', array);
      expect(response).to.be.a('object');
      expect(response).to.have.a.property('saleId');
      expect(response).to.have.a.property('itemUpdated');
      expect(response.itemUpdated[0]).to.have.a.property('product_id');
      expect(response.itemUpdated[0].product_id).to.be.equal(1);
      expect(response.itemUpdated[0]).to.have.a.property('quantity');
      expect(response.itemUpdated[0].quantity).to.be.equal(6);
      expect(response.itemUpdated).to.be.length(1); 
  });
   
});

describe('testa função deleteSales', () => {
  const array = [
    { 
      date: "2021-09-09T04:54:29.000Z",
      product_id: 1,
      quantity: 2,
    },
    {
      date: "2021-09-09T04:54:54.000Z",
      product_id: 2,
      quantity: 2,
    },
  ];

  before(async () => {
    sinon.stub(modelSalesProducts, 'getSalesAndProductsById').resolves(array);
    sinon.stub(modelSalesProducts, 'deleteSalesProducts').getCall(1);
    sinon.stub(modelSales, 'deleteSales').getCall(1);
  });

  after(async () => {
    modelSalesProducts.getSalesAndProductsById.restore()
    modelSalesProducts.deleteSalesProducts.restore();
    modelSales.deleteSales.restore();
  });


  it('retorna um objeto', async () => {
   const response = await serviceSales.deleteSales(2);
      expect(response).to.be.a('array');
      expect(response).to.be.length(2); 
      response.forEach((obj) =>{
        expect(obj).to.be.a('object');
        expect(obj).to.have.a.property('date');
        expect(obj).to.have.a.property('product_id');
        expect(obj).to.have.a.property('quantity');       
      });
  });
   
});