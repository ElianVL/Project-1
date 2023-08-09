import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const AdminLinksComponent = () => {
  return (
    <Navbar bg="light" variant="light">
      <Nav className="flex-column">
        <LinkContainer to="/admin/AdminOrdersPage">
          <Nav.Link>רכישות</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/AdminProductsPage">
          <Nav.Link>מוצרים</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/AdminUsersPage">
          <Nav.Link>משתמשים</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/AdminChatsPAge">
          <Nav.Link>Chats</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/admin/AdminAnalyticsPage">
          <Nav.Link>ניתוח נתונים</Nav.Link>
        </LinkContainer>
        <Nav.Link>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default AdminLinksComponent;

