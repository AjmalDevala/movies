Obtain API keys:

Get your TMDb API key.
(Optional) Get your YouTube API key for video data.
Enter the API keys into the .env file:

VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_YOUTUBE_API_KEY=your_youtube_api_key
Running the Application
Install dependencies:

npm install
Start the development server at localhost:5173:

npm run dev
Project Structure
react-movies/
├── .husky/ # Husky config. for Git hooks.
├── public/ # Static files.
├── src/ # Source files.
│ ├── assets/ # Assets like images, icons, etc.
│ ├── components/ # React components.
│ ├── config/ # Configuration files.
│ ├── constants/ # Constants and enums.
│ ├── pages/ # Application pages.
│ ├── locales/ # Translations.
│ ├── routes/ # Routes configuration.
│ ├── services/ # Service utilities and API calls.
├── .env.sample # Sample environment variables.
├── .gitignore # Git ignore file.
├── package.json # NPM package configuration.
├── README.md # Project documentation.
Available Scripts
npm run dev: Starts the development server.
API Integration Overview
TMDb API
Base URL: https://api.themoviedb.org/3
Authentication: API Key (stored in .env file)
YouTube API (Optional)
Base URL: https://www.googleapis.com/youtube/v3
Authentication: API Key (stored in .env file)
Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/YourFeature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
Credits
This project idea is gotten from the foundational work by jason.codes

License
This project is licensed under the MIT License - see the LICENSE file for details.
