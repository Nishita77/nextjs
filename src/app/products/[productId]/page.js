export const generateMetadata = async ({ params }) => {
    const { productId } = params;
    const title = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(productId);
      }, 100);
    });
    return {
      title: `Product ${title}`,
    };
  };
  
  export default function ProductDetails({ params }) {
    return <h1>Details about product {params.productId}</h1>;
  }
  