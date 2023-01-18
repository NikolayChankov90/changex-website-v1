import * as React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import content from "../../static/assets/content/content.json";
import MetaDecorator from "../Utils/MetaDecorator";
import BankPage from "./Bank";
import Wallet from "./Wallet";
import TokenPage from "./Token";
import About from "./About";
import Partner from "./Partner";
import NotFoundPage from "./404";
import Navigation from "../components/navigation/nav";
import Footer from "../components/footer";
import Home from "../components/home/home";
import {ScrollToTop} from "../../static/assets/js/ScrollToTop";
import CookieConsentModal from "../../static/assets/js/CookieConsent";
import Wealth from "./Wealth";
import Supported from "./Supported";

const imageUrl = "../../static/assets/images/Changex-OG.jpeg";

const IndexPage = () => {
  return (
      <Router>
        <CookieConsentModal />
        <MetaDecorator
            description={content.pageDescription}
            title={content.pageTitle}
            imageAlt={content.metaImageAlt}
            imageUrl={imageUrl}
        />
        <Navigation />
        <main className="pages">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/bank" element={<BankPage />} />
              <Route path="/wealth" element={<Wealth />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/token-page" element={<TokenPage />} />
              <Route path="/supported-tokens" element={<Supported />} />
              <Route path="/about" element={<About />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ScrollToTop>
        </main>
        <Footer />
      </Router>
  );
};

export default IndexPage;
