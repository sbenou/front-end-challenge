import React from "react";
import { RealEstateItemType } from "../../types/LandingPageType";
import { Button, Image } from "antd";
// @ts-ignore
import ReadMoreReact from "read-more-react";
import styles from "./styles.module.scss";
import StatusView from "./StatusView";

type RealEstateItemProps = {
  item: RealEstateItemType;
  onClickSetToExpired: (item: RealEstateItemType) => void;
};

// Set up of a property card
const RealEstateItem: React.FC<RealEstateItemProps> = ({
  item,
  onClickSetToExpired,
}) => (
  <div datatest-id="real-estate-item" className={styles.item_container}>
    <Image className={styles.bg_estate} src={item.image} alt="img" />
    <div className={styles.info_estate}>
      <div className={styles.price_and_status}>
        <h4>
          Asking Price:
          <br />
          <div>
            <b className={styles.price}>{item.askingPrice}</b>
          </div>
        </h4>
        <StatusView
          datatest-id="estate-item-status"
          isExpired={item.status === "expired"}
        />
      </div>

      <p>
        Postal Code: {item.postCode}
        <br />
        Address: {item.address}
      </p>
      <span>
        <div className={styles.dot} />
        Number of Bedrooms: {item.numberOfBedroom}
      </span>
      <ReadMoreReact
        text={item.desc}
        min={100}
        ideal={100}
        max={item.desc.length}
        readMoreText="Read more ..."
      />
      <div>
        <Button
          datatest-id="estate-button"
          disabled={item.status === "expired"}
          onClick={() => onClickSetToExpired(item)}
        >
          {item.status === "expired" ? "Expired" : "Mark as Expire"}
        </Button>
      </div>
    </div>
  </div>
);

export default RealEstateItem;
