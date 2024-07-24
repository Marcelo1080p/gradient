import React, { useState, useEffect } from "react";
import { Breadcrumb } from "antd";
import { MainLayout } from "../../components/mainLayout/MainLayout";
import { Link } from "react-router-dom";
import { ApiGradient } from "../../api/Axios";
import { Gradient } from "../../components/gradient/Gradient";

interface IGradient {
  id: number;
  directionGradient: string;
  gradientData: string;
}

export const HomePage: React.FC = () => {
  const [gradients, setGradients] = useState<IGradient[]>([]);

  useEffect(() => {
    const apiGradient = new ApiGradient();

    const dataApiGradients = async () => {
      try {
        const data = await apiGradient.getAllGradients();
        console.log("Received data:", data);
        setGradients([...data]); 
      } catch (error) {
        console.error("Error fetching gradients:", error);
      }
    };

    dataApiGradients();
  }, []);

  useEffect(() => {
    console.log("Gradients state updated:", gradients);
  }, [gradients]);

  const breadcrumb = (
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to={"/home"}>Home</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );

  return (
    <MainLayout breadcrumb={breadcrumb}>
      <h1>
        {gradients.length > 0 ? (
          gradients.map((gradient) => (
            <Gradient 
              key={gradient.id}
              title="Gradient"
              linearGradient={`${gradient.directionGradient.toLocaleLowerCase()}, ${gradient.gradientData.toLocaleLowerCase()}`}
            />
            
          ))
        ) : (
          <p>No gradients available</p>
        )}
      </h1>
    </MainLayout>
  );
};
