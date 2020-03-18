const state = {
  funds: 1000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, stockValue, stockQuantity }) {
    const record = state.stocks.find(element => element.id === stockId);
    if (record) {
      record.quantity += stockQuantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity: stockQuantity
      });
    }
    state.funds -= stockValue * stockQuantity;
  },
  SELL_STOCK(state, { id, value, quantity }) {
    const record = state.stocks.find(element => element.id === id);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += value * quantity;
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(element => element.id === stock.id);
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        value: record.value
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
