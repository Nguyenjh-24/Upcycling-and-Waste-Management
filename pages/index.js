import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styles from '../styles/style.module.css';
import { DesignOne } from '../components/DesignOne';

const index = () => {
  return (
    <div className={styles.container}>
      <div me={styles.topThing}>
       <h1 className={styles.bigTitle}>Luxe Vert Élégant</h1>
       <img className={styles.headerImage} src="EcoImage.jpg" />
      </div>
      <div className={styles.containerMain}>
        <title>Upcycling and Waste Management</title>
        <meta name="description" content="Website of Luxe Vert Élégant" />
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Leading the Packaging Revolution  <br></br> One Package at a Time</h1>
          <p className={styles.description}>
            In a world increasingly driven by sustainability and conscious consumerism, our motto, &quot;Eco-Friendly Material, Earth Friendly Results,&quot; encapsulates our commitment to redefining packaging for the modern era. Our innovative designs seamlessly blend eco-conscious principles with a touch of luxury, proving that sustainability need not compromise on elegance or functionality. As the demand for greener solutions grows, we envision a future where packaging is not only mass-producible but also crafted from materials that are readily accessible, biodegradable, and environmentally harmonious. By prioritizing the planet without sacrificing quality or aesthetic appeal, we aim to inspire confidence in consumers and businesses alike, showing that responsible choices can lead to exceptional outcomes. This forward-thinking approach positions us at the forefront of an industry transformation, where practicality, sustainability, and sophistication converge. 
          </p>
        </div>
  
        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
          <h3>Design 1</h3>
          <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignOne />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 2</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignOne />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 3</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignOne />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 4</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignOne />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 5</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignOne />
            </Canvas>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 6</h3>
            <div>
            <Canvas camera={{ position: [.5, .5, .5] }}>
              <Environment preset="studio"/>
              <OrbitControls />
              <DesignOne />
            </Canvas>
          </div>
          </div>
        </div>

        <div className={styles.uniqueSection}>
          <h2>What Materials We Used</h2>
          <p>
          As for the design aspect of our project, we intend to create a template based on sustainable modular packaging for luxury brands to use. We aim to develop a bi-layer, moldable, and biodegradable material that can package all sorts of goods.
	Currently, many brands try to go eco-friendly by adopting plant-based packaging such as seaweed and bamboo fibers or using recycled materials like trash or scrap material. While this approach is viable, we found that these materials tend to degrade quickly and lack a long shelf life without the addition of unnatural additives. Furthermore, these materials do not emphasize the luxury aspect that brands represent.
After extensive research, we decided to incorporate mycelium, which are mushroom roots that are incredibly beneficial to the environment with advantages such as carbon sequestration, biodegradability, and durability. It’s ideal for a molded protective box alternative or uniquely shaped inserts that align with the luxury appeal.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
          <h3>What is Mycelium</h3>
          <div>
            <p></p>
          </div>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 2</h3>
            <p>Ensure your business&apos;s health and profitability with our advanced analytics and Business Health Score. Our monthly analytics reports will provide insights to help your business thrive in the digital era.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Design 3</h3>
            <p>Efficiently manage your customer data with our CRM and CMS solutions. We&apos;ll streamline your data management processes, facilitate seamless email communications, and continuously innovate to keep your systems updated and effective. COMING SOON!</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Digital Marketing</h3>
            <p>Boost your online presence and engage your target audience with our tailored digital marketing strategies. From social media campaigns to targeted ads, we&apos;ll help you drive traffic and increase conversions.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>Email Verification</h3>
            <p>Guarantee your emails reach the right audience with our email verification service. Avoid the frustration of &quot;Address not found&quot; alerts and ensure your communications are always delivered.</p>
          </div>
          <div className={styles.serviceCard}>
            <h3>AI Solutions</h3>
            <p>Integrate D1Serve&apos;s AI into your daily operations to build a successful digital portfolio. Our AI solutions will enhance your business processes and improve efficiency. COMING SOON!</p>
          </div>
        </div>

        <div className={styles.uniqueSection}>
          <h2>Our Unique Approach</h2>
          <p>
            At D1Serve, we prioritize your success. Our unique approach to digital services ensures that your business receives the attention and care it deserves. We work closely with you to understand your goals and develop customized strategies to help you achieve them. Our team is dedicated to providing you with the tools and support you need to succeed. We thorougly analyze your business and provide you with the best solutions personalized to your needs. The D1 Method is proven to deliver results and help you reach your full potential.
          </p>
        </div>
  
        <div className={styles.additionalSection}>
          <h2>Why Choose Us?</h2>
          <p>
            We stand out because of our commitment to quality, our dedication to our clients, and our ability to deliver exceptional results. Our team works tirelessly to ensure your success, providing you with the tools and strategies you need to thrive. We are here to help you achieve your goals and take your business to the next level. If you have any questions, feel free to contact either CEO. We are always happy to help you.
          </p>
        </div>
        </div>
      </div>
  )
}
export default index