# Keep versions in page state and files on local disk, with no database

Every result becomes a version that records the version it was made from, so the user can go back to any earlier image without starting over. Versions live in the page's React state and the image and video files in `web/data/`. This trial app has one user on localhost, so a database and accounts would add setup and failure points without helping the demo. Closing the page loses the version list; the files stay on disk.
