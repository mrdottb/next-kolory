import Image from "next/image";
import { useRouter } from "next/router";

import Section from "../../components/ui/Section";
import Header from "../../components/ui/Header";
import ReturnButton from "../../components/ui/ReturnButton";
import ContactButton from "../../components/ui/ContactButton";

import classes from "./ProductSection.module.css";

import imageTemplate from "../../public/image-template.svg";

function ProductSection({ product }) {
  const router = useRouter();

  const categorySlug = router.query.categorySlug;

  let imageUrl = "";
  if (product.image) {
    imageUrl = product.image.url;
  } else {
    imageUrl = imageTemplate;
  }

  return (
    <Section className={classes.container}>
      <Header>{product.name}</Header>
      <div className={classes.imageRow}>
        <div className={classes.imageContainer}>
          <Image
            src={imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="contain"></Image>
        </div>
        <div className={classes.shortDescription}>
          {product.shortDescription}
        </div>
      </div>
      <div className={classes.longDescription}>{product.longDescription}</div>
      <div className={classes.buttonWrapper}>
        <ReturnButton href={`/${categorySlug}`}>cofnij</ReturnButton>
        <ContactButton
          href={`/?t=formSection`}
          className={classes.contactButton}>
          wyślij zapytanie
        </ContactButton>
      </div>
    </Section>
  );
}

export default ProductSection;
