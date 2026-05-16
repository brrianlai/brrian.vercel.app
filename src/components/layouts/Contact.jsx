import Button from "../Button";
import { RiMailLine } from "react-icons/ri";

const Contact = () => {
  return (
    <section className="background-dotted center large">
      <h2>Contact</h2>
      <Button
        link="mailto:brrianlai@gmail.com"
        shape="round"
        size="large"
        background="dark"
      >
        <div className="icon">
          <RiMailLine />
        </div>
        brrianlai@gmail.com
      </Button>
    </section>
  );
};

export default Contact;
