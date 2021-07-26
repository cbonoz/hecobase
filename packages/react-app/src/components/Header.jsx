import { PageHeader } from "antd";
import React from "react";
import { APP_DESCRIPTION, APP_NAME } from "../constants";

// displays a page header

export default function Header() {
  return (
    <a href="https://github.com/cbonoz/hecobase" target="_blank" rel="noopener noreferrer">
      <PageHeader title={APP_NAME} subTitle={APP_DESCRIPTION} style={{ cursor: "pointer" }} />
    </a>
  );
}
