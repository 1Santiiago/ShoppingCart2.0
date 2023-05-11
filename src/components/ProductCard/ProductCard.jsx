
import {BsFillCartPlusFill} from 'react-icons/bs'
import FormatCurrency from '../../utils/FormatCurrency';

function ProductCard({ img, price, title, botaoInfo }) {
  return (
    <section className="product-card">
      <img
        src={img.replace(/\w\.jpg/gi, "W.jpg")}
        alt="product"
        className="card__image "
      />

      <div className="card__infos">
        <h2 className=".card__price">{FormatCurrency(price, 'Brl')}</h2>
        <h2 className="card__title">{title}</h2>
      </div>

      <button type="button" className="button__add-cart">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;
