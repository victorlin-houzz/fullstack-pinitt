# Pinitt!

[Live site][pinitt]

[pinitt]: http://www.pinitt.co

## Minimum Viable Product

Pinitt is a web application inspired by Pinterest built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Discover feed on home page
- [ ] Profile
- [ ] Boards and Pins
- [ ] Follows (followers/followings users)

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

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days, W8 Tues-Wed)

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

### Phase 2: Pins Model, API, and components (2 days, W8 Thurs-Fri)

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
- [ ] Style pins components
- [ ] Seed pins
- [ ] Review phase 2

### Phase 3: Boards (2 day, W9 Mon-Tues)

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

### Phase 4: Follows Model, API, and components. User profile, and Guest DEMO. (1 days, W9 Wed)

**Objective:** User can follow/unfollow another user. Also showing followers/followings users.

- [ ] Create `FollowsContainer` with followings/followers
- [ ] CRUD API for follows (`FollowsController`)
- [ ] Create follow/unfollow buttons in `UserContainer`
- [ ] Style NavBarContainer/UserContainer/FollowsContainer components
- [ ] Create Guest Demo.

### Phase 5: - Pagination / infinite scroll for Pins Index (1 day, W9 Thurs)

**objective:** Add infinite scroll to Pins Index

- [ ] Paginate Notes Index API to send 20 results at a time
- [ ] Append next set of results when user scrolls and is near bottom
- [ ] Style scroll components and transitions
- [ ] Ensure seed data demonstrates infinite scroll

### Bonus Features (TBD)
- [ ] Likes for pins
- [ ] Comments for pins
- [ ] Search pins by content
- [ ] Taggings for pins
- [ ] Notifications for users
