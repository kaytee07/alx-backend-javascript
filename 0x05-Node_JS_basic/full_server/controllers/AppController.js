/**
 * Contains the miscellaneous route handlers.
 * @author Winful Kofi Taylor <https://github.com/Kaytee07>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
