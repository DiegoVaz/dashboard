import {
  FaMoneyBill,
  FaFileAlt,
  FaBoxOpen,
  FaBars,
  FaMoneyCheckAlt,
  FaChartLine,
} from "react-icons/fa";
import styles from "./styles.module.scss";

import ChartComponet from "../charts";

export default function MainCompent() {
  return (
    <main className={styles.main}>
      <div className={styles.main__container}>
        <div className={styles.main__title}>
          <img src="/hello.svg" alt="" />
          <div className={styles.main__greeting}>
            <h1>Olá usuário</h1>
            <p>Bem vindo ao seu painel </p>
          </div>
        </div>
        <div className={styles.main__cards}>
          <div className={styles.card}>
            <FaFileAlt style={{ fontSize: 30 }} className="text-lightblue" />
            <div className={styles.card__inner}>
              <p className="text-primary-p">Número de pedidos</p>
              <span className="font-bold text-title">578</span>
            </div>
          </div>
          <div className={styles.card}>
            <FaMoneyBill style={{ fontSize: 30 }} className="text-red" />
            <div className={styles.card__inner}>
              <p className="text-primary-p">Pagamentos</p>
              <span className="font-bold text-title">R$2000</span>
            </div>
          </div>
          <div className={styles.card}>
            <FaBoxOpen style={{ fontSize: 30 }} className="text-yellow" />
            <div className={styles.card__inner}>
              <p className="text-primary-p">Número de produtos</p>
              <span className="font-bold text-title">670</span>
            </div>
          </div>
          <div className={styles.card}>
            <FaBars style={{ fontSize: 30 }} className="text-green" />
            <div className={styles.card__inner}>
              <p className="text-primary-p">Categorias</p>
              <span className="font-bold text-title">40</span>
            </div>
          </div>
        </div>
        <div className={styles.charts}>
          <div className={styles.charts__left}>
            <div className={styles.charts__left_title}>
              <div>
                <h1>Daily Reports</h1>
                <p>Goiânia, Goiás, BR</p>
              </div>

              <FaChartLine style={{ fontSize: 60, color: "#39447a" }} />
            </div>
            <ChartComponet />
          </div>
          <div className={styles.charts__right}>
            <div className={styles.charts__right__title}>
              <div>
                <h1>Daily</h1>
                <p>Goiânia, Goiás, BR</p>
              </div>
              <FaMoneyCheckAlt
                style={{
                  fontSize: 60,
                  color: "#FFC100",
                }}
              />
            </div>
            <div className={styles.charts__right__cards}>
              <div className={styles.card01}>
                <h1>Lucros</h1>
                <p>R$2500</p>
              </div>
              <div className={styles.card02}>
                <h1>Pagamentos</h1>
                <p>R$2500</p>
              </div>
              <div className={styles.card03}>
                <h1>Custo de hospedagem</h1>
                <p>R$2500</p>
              </div>
              <div className={styles.card04}>
                <h1>Banco de dados</h1>
                <p>R$2500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
