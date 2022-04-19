//Example 1
const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

// Example 2

const issue = {
  title: "Title",
  repositoryNameAssociated: "Repo Name",
  status: "Open",
  numberOfComments: 4,
  labels: 6,
  author: "Alejandro M.",
  dateCreated: new Date(2020, 11, 17),
  lastUpdated: new Date(2021, 11, 19),
  getTitleAndAuthor: function () {
    return `The issue ${this.title} was created by ${this.author}`;
  },
  getGeneralInfo: function () {
    return `Title: ${this.title} \n Status: ${this.status} \n Number of Comments: ${this.numberOfComments} \n Labels: ${this.labels} \n Date Created: ${this.dateCreated} \n Last Update: ${this.lastUpdated}`;
  },
};

console.log("--------------- Issue -----------------");
console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

// Example 3
const pullRequest = {
  title: "Pull Request",
  author: "Alejandro M.",
  branchName: "Main",
  dateCreated: new Date(2022, 1, 1),
  status: "Open",
  repositoryNameAssociated: "Repo Name",
  getStatus: function () {
    return this.status;
  },
  getTitleAndAuthor: function () {
    return `The Pull request ${this.title} was created by ${this.author}`;
  },
};

console.log("--------------- Pull Request -----------------");
console.log(pullRequest.getTitleAndAuthor());
console.log(`Status: ${pullRequest.getStatus()}`);
