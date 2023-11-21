/**
 * Binds the routes to the appropriate handler in the
 * given Express application.
 * @param {Express} app The Express application.
 * @author Bezaleel Olakunori <https://github.com/B3zaleel>
 */
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';


const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
