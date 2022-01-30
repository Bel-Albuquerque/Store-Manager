const sinon = require('sinon');
const { expect } = require('chai');

const servicesProducts = require('../../services/servicesProducts');
const controllerProducts = require('../../controllers/controllerProducts');
const serviceSales = require('../../services/serviceSales');
const controllerSales = require('../../controllers/controllerSales');

describe('Ao chamar o getAllSalesAndProducts', () => {
  const response = {};
  const request = {};

  before(() => {
    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();
    sinon.stub(serviceSales, 'getAllSalesAndProducts')
      .resolves(true);
  });

  after(() => {
    serviceSales.getAllSalesAndProducts.restore();
  });

  it('é chamado o status com o código 200', async () => {
    await controllerSales.getAllSalesAndProducts(request, response);
    console.log(response.status);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });

  it('é chamado o json', async () => {
    await controllerSales.getAllSalesAndProducts(request, response);

    expect(response.json.called).to.be.equal(true);
  });

});

describe('Ao chamar o createSales', () => {
  const response = {};
  const request = {};

  before(() => {
    request.body = [{
      product_id: 1,
      quantity: 30
    }];

    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();
    sinon.stub(serviceSales, 'createSalesProducts')
      .resolves(true);
  });

  after(() => {
    serviceSales.createSalesProducts.restore();
  });

  it('é chamado o status com o código 201', async () => {
    await controllerSales.createSales(request, response);
    console.log(response.status);

    expect(response.status.calledWith(201)).to.be.equal(true);
  });

  it('é chamado o json', async () => {
    await controllerSales.createSales(request, response);

    expect(response.json.called).to.be.equal(true);
  });

});

describe('Ao chamar o getSalesAndProductsById', () => {
  const response = {};
  const request = {};

  before(() => {
    request.params = {
      id: 3
    };

    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();
    sinon.stub(serviceSales, 'getSalesAndProductsById')
      .resolves(true);
  });

  after(() => {
    serviceSales.getSalesAndProductsById.restore();
  });

  it('é chamado o status com o código 200', async () => {
    await controllerSales.getSalesAndProductsById(request, response);
    console.log(response.status);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });

  it('é chamado o json', async () => {
    await controllerSales.getSalesAndProductsById(request, response);

    expect(response.json.called).to.be.equal(true);
  });

});

describe('Ao chamar o updateSalesProducts', () => {
  const response = {};
  const request = {};

  before(() => {
    request.params = {
      id: 3
    };
    request.body = [{
      product_id: 1,
      quantity: 30
    }];

    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();
    sinon.stub(serviceSales, 'updateSalesProducts')
      .resolves(true);
  });

  after(() => {
    serviceSales.updateSalesProducts.restore();
  });

  it('é chamado o status com o código 200', async () => {
    await controllerSales.updateSalesProducts(request, response);
    console.log(response.status);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });

  it('é chamado o json', async () => {
    await controllerSales.updateSalesProducts(request, response);

    expect(response.json.called).to.be.equal(true);
  });

});

describe('Ao chamar o deleteSales', () => {
  const response = {};
  const request = {};

  before(() => {
    request.params = {
      id: 3
    };
    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();
    sinon.stub(serviceSales, 'deleteSales')
      .resolves(true);
  });

  after(() => {
    serviceSales.deleteSales.restore();
  });

  it('é chamado o status com o código 200', async () => {
    await controllerSales.deleteSales(request, response);
    console.log(response.status);

    expect(response.status.calledWith(200)).to.be.equal(true);
  });

  it('é chamado o json', async () => {
    await controllerSales.deleteSales(request, response);

    expect(response.json.called).to.be.equal(true);
  });

});

describe('Ao chamar o createProduct', () => {
    const response = {};
    const request = {};
    const produtoCadastrado = { id: 1, name: "produto", quantity: 10 };

    before(() => {
      request.body = {
        name: "bibelo",
        quantity: "30"
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
      sinon.stub(servicesProducts, 'createProduct')
        .resolves(true);
    });

    after(() => {
      servicesProducts.createProduct.restore();
    });

    it('é chamado o status com o código 201', async () => {
      await controllerProducts.createProduct(request, response);
      console.log(response.status);

      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('é chamado o json', async () => {
      await controllerProducts.createProduct(request, response);

      expect(response.json.called).to.be.equal(true);
    });

  });

  describe('Ao chamar o getColumn', () => {
    const response = {};
    const request = {};
    const produtoCadastrado = { id: 1, name: "produto", quantity: 10 };

    before(() => {
      request.body = {};

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
      sinon.stub(servicesProducts, 'getColumn')
        .resolves(true);
    });

    after(() => {
      servicesProducts.getColumn.restore();
    });

    it('é chamado o status com o código 200', async () => {
      await controllerProducts.getColumn(request, response);
      console.log(response.status);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o json', async () => {
      await controllerProducts.getColumn(request, response);

      expect(response.json.called).to.be.equal(true);
    });

  });

  describe('Ao chamar o editById', () => {
    const response = {};
    const request = {};
    const produtoCadastrado = { id: 1, name: "produto", quantity: 10 };

    before(() => {
      request.params = { id: 1 }
      request.body = {
        name: "bibelo",
        quantity: "30"
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
      sinon.stub(servicesProducts, 'editById')
        .resolves(true);
    });

    after(() => {
      servicesProducts.editById.restore();
    });

    it('é chamado o status com o código 200', async () => {
      await controllerProducts.editById(request, response);
      console.log(response.status);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o json', async () => {
      await controllerProducts.editById(request, response);

      expect(response.json.called).to.be.equal(true);
    });

  });

  describe('Ao chamar o deletById', () => {
    const response = {};
    const request = {};
    const produtoCadastrado = { id: 1, name: "produto", quantity: 10 };

    before(() => {
      request.params = { id: 1 }
      request.body = {
        name: "bibelo",
        quantity: "30"
      };

      response.status = sinon.stub()
        .returns(response);
      response.json = sinon.stub()
        .returns();
      sinon.stub(servicesProducts, 'deletById')
        .resolves(true);
    });

    after(() => {
      servicesProducts.deletById.restore();
    });

    it('é chamado o status com o código 200', async () => {
      await controllerProducts.deletById(request, response);
      console.log(response.status);

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('é chamado o json', async () => {
      await controllerProducts.deletById(request, response);

      expect(response.json.called).to.be.equal(true);
    });

  });