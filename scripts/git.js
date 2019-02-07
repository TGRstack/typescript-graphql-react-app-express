module.exports = {
  tags: {
    push: 'git push --follow-tags origin master',
    deleteAllLocally: "git tag -d `git tag | grep -E '.'`",
  }
}
