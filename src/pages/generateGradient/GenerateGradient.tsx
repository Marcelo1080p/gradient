import React from "react";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { Generate } from "./Generate/Generate";


export const GenerateGradient: React.FC = () => {
    const breadcrumb = (
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to={"/gradient-generate"}>Home</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      );
    return(
        <MainLayout breadcrumb={breadcrumb} >
            <section>
                <Generate/>
            </section>
        </MainLayout>
    )
}