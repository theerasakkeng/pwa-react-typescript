import Header from "../../../@core/components/header/Header";
import styles from "./Privacy.module.css";

const Privacy = () => {
  return (
    <>
      <Header />
      <div className="container-content">
        <div className={styles.pageTitle}>นโยบายความเป็นส่วนตัว</div>
        <div className={`${styles.privacyContent} glass-box`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          dignissimos sed praesentium quod dolore, exercitationem hic
          repellendus ratione incidunt dolores ex, obcaecati maxime ad assumenda
          optio eos aliquid aperiam quaerat voluptatibus qui adipisci.
          Dignissimos eaque laboriosam nesciunt, blanditiis iusto libero non
          iste, harum assumenda eius ut necessitatibus sed optio rerum cumque
          enim nulla aliquam aliquid fugiat. Eligendi delectus, voluptatem
          cupiditate quod consequuntur ullam beatae dolor totam veritatis eum!
          Beatae ullam sint quasi labore aut quisquam minima rem facere ratione
          ab cumque iste voluptate quaerat placeat quia molestias doloribus
          porro nobis neque, harum blanditiis. Adipisci consequatur eaque
          doloribus, animi laudantium nostrum similique placeat sapiente quis
          nisi? Eum vitae non quis consequatur consectetur tempore fugiat
          incidunt! Doloremque, ab deserunt aperiam itaque recusandae minima.
          Voluptatibus aut distinctio dolores obcaecati. Itaque error nisi, illo
          pariatur aliquam totam expedita fugit nostrum, ea fuga aliquid sint
          repellat eligendi harum tenetur iure voluptatem. Quis modi accusamus
          possimus?
        </div>
      </div>
    </>
  );
};

export default Privacy;
