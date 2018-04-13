import { openCart, addItems, site } from './injectState';

const injectZygote = () => {
  document.addEventListener('click', e => {
    const dataId = e.target.dataset.id;
    const dataPrice = e.target.dataset.price;
    if (dataId && dataPrice) {
      const data = e.target.dataset;
      let updated = {};
      Object.keys(data).map(k => {
        updated[k] = data[k];
      });
      if (!updated.qty) updated.qty = 1;

      addItems([updated]);
      if (data.openCart) {
        openCart();
      }
      if (data.site) {
        site(data.site);
      }
    }
  });
};

export { injectZygote };
