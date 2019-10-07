# Utvecklingsverktyg Git

### Setup git
- Create new dev branch

  `git checkout -b dev`
  
- Create new folder firstnameLastname

  `mkdir myfirstnameMylastname`

- Cd into directory

  `cd myfirstnameMylastname`

  
- Add a new file under myfirstnameMylastname folder

  `touch notes.txt`
  
- Move out of myfirstnameMylastname folder

`cd ..`

- Add folder to git

  `git add myfirstnameMylastname`
  
- Commit folder with commit message my new folder

  `git commit -m "my new folder"`
  
- Check that your new commit was added

  `git log`
  
- Append text to file

  `echo "git is awesome!" >> notes.txt`
  
- View changes

  `git diff`
  
### Find out how to do the following and write the commands/answers in a text file.
  - Stash and pop your changes
  - Append three new lines to notes.txt commit each line as a separate commit using `git add -p`
  - Use `git rebase -i` to rearrenge the order of the currently created commits
  - Use `git rebase -i` to delete one of the commits
  - Delete one commit *whithout* using git rebase -i
  - Find out what is git reflog and why has it saved developers so many times?
  - Create an account on github.com
  - Create a new repository and push the answers to that repository
