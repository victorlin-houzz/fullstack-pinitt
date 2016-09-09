# Pinitt

[Live site][pinitt] or [pinitt-heroku]

[pinitt]: http://www.pinitt.us
[pinitt-heroku]: http://pinitt.herokuapp.com

## Features

Pinitt is a web application inspired by Pinterest built using Ruby on Rails and React/Redux. This app satisfies the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosted on Heroku

- [ ] New account creation, login, and guest/demo login
![login]

- [ ] Discover feed on home page
![feed]

- [ ] Profile
![user]

- [ ] Boards and Pins
![board_pins]
![pin_details]

- [ ] New Board/Pin
![new]
![new_pin]

- [ ] Follows (followers/following users)
![followers]

- [ ] Infinite Scroll

- [ ] Realtime Search
![search]

[login]: ./docs/screenshots/login.png
[feed]: ./docs/screenshots/feeds.png
[user]: ./docs/screenshots/user.png
[board_pins]: ./docs/screenshots/board_pins.png
[pin_details]: ./docs/screenshots/pin_details.png
[new]: ./docs/screenshots/new.png
[new_pin]: ./docs/screenshots/new_pin.png
[followers]: ./docs/screenshots/followers.png
[search]: ./docs/screenshots/search.png

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: ./docs/wireframes/views.md
[components]: ./docs/component-heirarchy.md
[redux-structure]: ./docs/redux-structure.md
[sample-state]: ./docs/sample-state.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline (2 weeks)

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [ ] New Rails project
- [ ] `User` model/migration
- [ ] Back end authentication (session/password/routes)
- [ ] `StaticPages` controller and root view
- [ ] Webpack & react/redux modules
- [ ] `APIUtil` to interact with the API
- [ ] Redux cycle for frontend authentication
- [ ] User signup/login components
- [ ] Blank landing component after signup/login
- [ ] Style signup/login components
- [ ] Create `NavBarContainer` (Logo and User profile button) and (empty) PinsContainer for homepage
- [ ] Create `UserContainer` with logout button and profile picture.
- [ ] Create (empty) `BoardsContainer`
- [ ] Create (empty) `PinsContainer`
- [ ] Seed users

### Phase 2: Pins Model, API, and components (2 days)

**Objective:** Pins can be created, read, edited and destroyed through
the API.

- [ ] `Pin` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for pins (`PinsController`)
- [ ] JBuilder views for pins
- [ ] Pin components and respective Redux loops
- [ ] `PinsContainer`
- [ ] `PinItem`
- [ ] `PinDetail`
- [ ] `NewPinForm`
- [ ] `NewPin` button always stays at the right-bottom corner
- [ ] `NewPin` content is scraped from the website that user typed in.
- [ ] Style pins components
- [ ] Seed pins
- [ ] Review phase 2

### Phase 3: Boards (1 day)

**Objective:** Pins belong to Boards that can be created, read, edited and destroyed through the API.

- [ ] `Board` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for boards (`BoardsController`)
- [ ] JBuilder views for boards
- [ ] Adding pins requires a board
- [ ] Viewing pins by board
- [ ] Board components and respective Redux loops
- [ ] `BoardsContainer`
- [ ] `BoardItem`
- [ ] `BoardDetail`
- [ ] `NewBoardForm`
- [ ] `NewBoard` button always stays at the right-bottom corner
- [ ] Style board components
- [ ] Seed boards
- [ ] Review phase 3

### Phase 4: Follows Model, API, and components. User profile, and Guest DEMO. (1 day)

**Objective:** User can follow/unfollow another user. Also showing followers/followings users.

- [ ] Create `FollowsContainer` with followings/followers
- [ ] CRUD API for follows (`FollowsController`)
- [ ] Create follow/unfollow buttons in `UserContainer`
- [ ] Style NavBarContainer/UserContainer/FollowsContainer components
- [ ] Create Guest Demo.

### Phase 5: - Infinite scroll for Pins Index. (1 day)

**objective:** Add infinite scroll to Pins Index

- [ ] Paginate Pins Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Phase 6: - Realtime Search. (1 day)

**objective:** Realtime Pins Search through Search Bar.

- [ ] Realtime queries between search bar and backend database.
- [ ] Search the pins that match the keyword in title or description.
- [ ] Render search result in realtime.

### Bonus Features (TBD)
- [ ] Likes for pins
- [ ] Comments for pins
- [ ] Taggings for pins
- [ ] Notifications for users
