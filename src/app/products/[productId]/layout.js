function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  export default function ProductDetailLayout({ children }) {
    // Throw error 50% of the time
    // const random = getRandomInt(2);
    // if (random === 1) {
    //   throw new Error("Error loading product details");
    // }
  
    return (
      <>
        {children}
        <h2>Featured products</h2>
      </>
    );
  }
  