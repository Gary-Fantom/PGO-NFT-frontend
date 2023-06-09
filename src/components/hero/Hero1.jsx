import React from 'react';
import {Link} from 'react-router-dom';
import env from "react-dotenv";

const Hero1 = () => {
  return (
    <div className="hero__1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero__left space-y-20">
              <h1 className="hero__title">
                Discover digital art and collect NFTs
              </h1>
              <p className="hero__text txt">
                PGO-NFT is a ERC721 NFT for P2E games which is
                used by multiple websites to provide the users the best possible
                experience.
              </p>
              <div
                className="space-x-20 d-flex flex-column flex-md-row
							sm:space-y-20">
                <Link className="btn btn-primary" to="marketplace">
                  View market
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              className="img-fluid w-full"
              id="img_js"
              src={`${env.BACKEND_ORIGIN}/arts/images/0`}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
