# Redux Structure

The application's state is organized by data type. Under each data type, there
may be sub-states. Each action is listed with the sequence of events that
results from its invocation, ending with the API or a reducer. Subscribed
components, i.e. containers, are listed at the end.

Using this document, you should be able to trace an **action** starting with
where it was invoked, through the **API**/**reducer** involved, and finally to
the **components** that update as a result. Once you start implementing your
Redux structure, you'll need to do the same.

## Auth Cycles

### Session API Request Actions

* `signUp`
0. invoked from `AuthFormContainer` `onSubmit`
0. `POST /api/users` is called.
0. `receiveCurrentUser` is set as the success callback.

* `logIn`
0. invoked from `AuthFormContainer` `onSubmit`
0. `POST /api/session` is called.
0. `receiveCurrentUser` is set as the callback.

* `logOut`
0. invoked from `UserDetailContainer` `onClick`
0. `DELETE /api/session` is called.
0. `removeCurrentUser` is set as the success callback.

* `fetchCurrentUser`
0. invoked from `UserDetailContainer` in `didMount`
0. `GET /api/session` is called.
0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
0. invoked from an API callback
0. the `SessionReducer` stores `currentUser` in the application's state.

* `removeCurrentUser`
0. invoked from an API callback
0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
0. invoked from API callbacks on error for actions that generate POST requests
0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms

* `removeErrors`
0. invoked from API callbacks on success for actions that generate POST requests
0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## Pin Cycles

### Pins API Request Actions

* `fetchAllPins`
0. invoked from `PinsContainer` `didMount`/`willReceiveProps`
0. `GET /api/pins` is called.
0. `receiveAllPins` is set as the success callback.

* `createPin`
0. invoked from new pin button `onClick`
0. `POST /api/pins` is called.
0. `receiveSinglePin` is set as the success callback.

* `fetchSinglepin`
0. invoked from `PinDetail` `didMount`/`willReceiveProps`
0. `GET /api/pins/:id` is called.
0. `receiveSinglePin` is set as the success callback.

* `destroyPin`
0. invoked from delete pin button `onClick`
0. `DELETE /api/pins/:id` is called.
0. `removePin` is set as the success callback.

### Pins API Response Actions

* `receiveAllPins`
0. invoked from an API callback
0. the `PinReducer` updates `pins` in the application's state.

* `receiveSinglePin`
0. invoked from an API callback
0. the `PinReducer` updates `pins[id]` in the application's state.

* `removePin`
0. invoked from an API callback
0. the `PinReducer` removes `pins[id]` from the application's state.

## Board Cycles

### Boards API Request Actions

* `fetchAllBoards`
0. invoked from `BoardsIndex` `didMount`/`willReceiveProps`
0. `GET /api/boards` is called.
0. `receiveAllBoards` is set as the success callback.

* `createBoard`
0. invoked from new board button `onClick`
0. `POST /api/boards` is called.
0. `receiveSingleBoard` is set as the callback.

* `fetchSingleBoard`
0. invoked from `BoardDetail` `didMount`/`willReceiveProps`
0. `GET /api/boards/:id` is called.
0. `receiveSingleBoard` is set as the success callback.

* `updateBoard`
0. invoked from `BoardForm` `onSubmit`
0. `POST /api/boards` is called.
0. `receiveSingleBoard` is set as the success callback.

* `destroyBoard`
0. invoked from delete board button `onClick`
0. `DELETE /api/boards/:id` is called.
0. `removeBoard` is set as the success callback.

### Boards API Response Actions

* `receiveAllBoards`
0. invoked from an API callback.
0. The `Board` reducer updates `boards` in the application's state.

* `receiveSingleBoard`
0. invoked from an API callback.
0. The `Board` reducer updates `boards[id]` in the application's state.

* `removeBoard`
0. invoked from an API callback.
0. The `Board` reducer removes `boards[id]` from the application's state.

### Follows API Request Actions

* `fetchAllFollowers`
0. invoked from `FollowsContainer` followers button `onClick`
0. `GET /api/followers` is called.
0. `receiveAllFollowers` is set as the success callback.

* `fetchAllFollowings`
0. invoked from `FollowsContainer` followings button `onClick`
0. `GET /api/followings` is called.
0. `receiveAllFollowings` is set as the success callback.

* `createFollowings`
0. invoked from `UserDetailContainer` following button `onClick`
0. `POST /api/followings` is called.
0. `receiveAllFollowings` is set as the success callback.

* `destroyFollowings`
0. invoked from `UserDetailContainer` unfollow  button `onClick`
0. `DELETE /api/followings/:id` is called.
0. `receiveAllFollowings` is set as the success callback.
### Follows API Response Actions

* `receiveAllFollowers`
0. invoked from an API callback.
0. The `Follows` reducer updates `followers` in the application's state.

* `receiveAllFollowings`
0. invoked from an API callback.
0. The `Follows` reducer updates `followings` in the application's state.
