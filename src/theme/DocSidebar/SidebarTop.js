import React from "react";
import styles from "./styles.module.css"; // Using a custom className
import VersionMap from "/versions.json";
import SearchBar from '@theme/SearchBar';

let currentVersion = "";
let searchUrl = "";

const publicVersions = [];
for (let i of VersionMap) {
  if (i.hide === false) {
    publicVersions.push(i);
  }
}

const latestVersion = publicVersions[0];

class DocsVersionDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVersion: latestVersion,
    };
  }
  componentDidMount() {
    let pathname = window.location.pathname;
    for (let v of publicVersions) {
      if (pathname.indexOf(v) >= 0) {
        currentVersion = v;
        this.setState({
          currentVersion: currentVersion
        });
        searchUrl = '/' + currentVersion;
        sessionStorage.setItem("currentVersion", currentVersion);
        return
      }
    }

    currentVersion = latestVersion;
    this.setState({
      currentVersion: currentVersion
    });
    searchUrl = "";
    sessionStorage.setItem("currentVersion", currentVersion);
  }

  getValue(val) {
    if (val === latestVersion) {
      window.location.href = window.location.protocol + "//" + window.location.host + "/";
    } else {
      window.location.href = window.location.protocol + "//" + window.location.host + "/" + val + "/";
    }
    currentVersion = val;
  }

  render() {
    return (
      <div className={styles.sidebarTop}>
        <div className={styles.versionDropdownWrapper}>
          <select
            name="version"
            className={styles.versionSelect}
            onChange={(e) => this.getValue(e.target.value)}
            value={this.state.currentVersion}
          >
            <option key="latest" value="latest">Latest</option>
          </select>
        </div>
        <SearchBar />
      </div>
    );
  }
}
export default DocsVersionDropdown;
