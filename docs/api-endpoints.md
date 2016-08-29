# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session`

### Pins

- `GET /api/pins`
- `POST /api/pins`
- `GET /api/pins/:id`
- `PATCH /api/pins/:id`
- `DELETE /api/pins/:id`

### Boards

- `GET /api/boards`
- `POST /api/boards`
- `GET /api/boards/:id`
- `GET /api/boards/:id/pins`
- index of all pins for a board
- accepts pagination params (if I get there)

### Follows

- `GET /api/followers`
- index of all followers
- `GET /api/followings`
- index of all followings
- `POST /api/followings`: add user to my followings by name
- `POST /api/followings/:id`: remove user from my followings by name
