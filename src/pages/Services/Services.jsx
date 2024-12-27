
import React from 'react';
import { FaGavel, FaShieldAlt, FaChartLine, FaUsers } from 'react-icons/fa';
import StatsCounter from '../../components/StatsCounter/StatsCounter ';
import { Helmet } from 'react-helmet-async';
const Services = () => {
  const Services = [
    {
      id:1,
      title: 'Bid Management',
      description: 'Efficient bid tracking and management, ensuring your bids are placed at the right time for maximum success.',
      icon: <FaGavel className="text-4xl text-green mb-4" />
    },

    {
      id:2,
      title: 'Auction Features',
      description: 'From auction features like live bidding, auction duration, and buy-now functionality to advanced features like multi-step bidding.',
      icon: <FaChartLine className="text-4xl text-yellow-500 mb-4" />
    },

    {
      id:3,
      title: 'User Management',
      description: 'User management features like user registration, login, and account settings, ensuring a smooth user experience.',
      icon: <FaUsers className="text-4xl text-purple-400 mb-4" />
    },

    {
      id:4,
      title: 'Privacy and Security',
      description: 'Strong security features, including SSL/TLS encryption, two-factor authentication, and user data encryption.',
      icon: <FaShieldAlt className="text-4xl text-blue-500 mb-4" />
    }

  ]
  return (
    <>
    <Helmet>
    <title>BidXpress | Services</title>
    </Helmet>
    <section className="section mb-20  mt-36">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <p className="text-lg text-gray-600 mb-12">
          We offer a range of services to make your auction experience seamless, secure, and rewarding. Explore the features that
          set us apart.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
          {
            Services?.map(({id,title,description,icon}) => <div key={id} className="bg-white p-8 rounded-lg shadow-lg text-center">
            {icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">
            {description}
            </p>
          </div>)
          }
        </div>
      </div>
      <StatsCounter/>
    </section>
    </>
  );
};

export default Services;
