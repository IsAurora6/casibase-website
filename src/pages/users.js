import React from "react";
import Layout from "@theme/Layout";
import Translate from "@docusaurus/Translate";
import {UserList} from "@site/src/components/UserList";

export default function Users() {
  return (
    <Layout title="Showcase" description="Casibase Showcase">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">
            <Translate>Who&apos;s using Casibase?</Translate>
          </h1>
          <p className="hero__subtitle">
            <Translate>
              Hundreds of projects are using Casibase, from established Fortune 500 companies to hot new startups. If you&apos;re curious to see what can be accomplished with Casibase, check out these apps!
            </Translate>
          </p>
        </div>
      </header>
      <div className="container" style={{
        paddingTop: "10vh",
        paddingBottom: "10vh",
        textAlign: "center",
      }}>
        <UserList />
        <br /><br /><br />
        <h2>
          <Translate>Is your project also using Casibase?</Translate>
        </h2>
        <a className="button button--lg button--outline button--primary" href="https://github.com/casibase/casibase-website/edit/master/static/data/users.json">
          <Translate>Add your company here</Translate>
        </a>
      </div>
    </Layout>
  );
}
