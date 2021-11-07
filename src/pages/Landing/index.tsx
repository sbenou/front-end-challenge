import React, { useEffect } from "react";
import "antd/dist/antd.css";
import { List, Row, Select } from "antd";
import RealEstateItem from "../../components/RealEstateItem";
import { RealEstateItemType } from "../../types/LandingPageType";

const { Option } = Select;

const LandingPage: React.FC = () => {
  const [data, setData] = React.useState<RealEstateItemType[]>([]);
  const [filteredData, setFilteredData] = React.useState<RealEstateItemType[]>(
    []
  );
  const [filterStatus, setFilterStatus] = React.useState("all");

  // read property list data from local storage if exists
  useEffect(() => {
    const projectListData = JSON.parse(
      localStorage.getItem("propertyListData") || "[]"
    );
    setData(projectListData);
  }, []);

  // called on changing filter status or data
  useEffect(() => {
    const filtered: RealEstateItemType[] = data.filter(
      (item: RealEstateItemType) =>
        filterStatus === "all" || filterStatus === item.status
    );
    setFilteredData(filtered);
  }, [filterStatus, data]);

  // find the index of the clicked property ...
  const onMarkAsExpire = (item: RealEstateItemType) => {
    const newData: RealEstateItemType[] = [...data];
    const foundExpiredIndex = newData.findIndex(
      (currentValue: RealEstateItemType) => currentValue.id === item.id
    );
    // ... and set it to "expired"
    newData[foundExpiredIndex].status = "expired";
    setData(newData);
    // update local storage with updated data
    localStorage.setItem("propertyListData", JSON.stringify(newData));
  };

  const handleChange = (status: string) => {
    setFilterStatus(status);
  };

  return (
    // testing display real estate item data test id
    <div data-testid="landing-test-id" style={{ padding: "20px" }}>
      {/* display drop down with 3 options */}
      <Row justify="end" style={{ marginBottom: 20 }}>
        <Select
          style={{ width: 100 }}
          defaultValue="all"
          onChange={handleChange}
        >
          <Option value="all">All</Option>
          <Option value="active">Active</Option>
          <Option value="expired">Expired</Option>
        </Select>
      </Row>
      {/* displaying all the properties */}
      <Row>
        <List
          grid={{ gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
          itemLayout="horizontal"
          dataSource={filteredData}
          renderItem={(item: RealEstateItemType) => (
            <List.Item>
              <RealEstateItem
                onClickSetToExpired={onMarkAsExpire}
                item={item}
              />
            </List.Item>
          )}
        />
      </Row>
    </div>
  );
};

export default LandingPage;
