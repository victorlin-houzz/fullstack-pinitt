# Pinitt

[Live site][pinitt] or [pinitt-heroku]

[pinitt]: http://www.pinitt.us
[pinitt-heroku]: http://pinitt.herokuapp.com

## Features

Pinitt is a web application inspired by Pinterest built using Ruby on Rails and React/Redux. This app satisfies the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

### Single Page App
```jsx
 
<Router history={ hashHistory }>
  <Route path="/" component={ App } >
    <IndexRoute component={ HomeContainer }
      onEnter={this._ensureLoggedIn}/>
    <Route path="/login" component={ SessionFormContainer }
      onEnter={this._redirectIfLoggedIn}/>
    <Route path="/join" component={ SessionFormContainer }
      onEnter={this._redirectIfLoggedIn}/>
    <Route path="/" component={ HomeContainer }
      onEnter={this._ensureLoggedIn}>
      <Route path="search" component={ SearchPinContainer } />
      <Route path="pins" component={PinsContainer} />
      <Route path=":username" component={ UserContainer }>
        <IndexRoute component={ BoardsContainer } />
        <Route path="boards" component={ BoardsContainer } />
        <Route path="pins" component={ UserPinsContainer } />
        <Route path="followers" component={ FollowersContainer } />
        <Route path="following" component={ FollowingContainer } />
      </Route>
      <Route path="boards/:boardId" component={ BoardContainer } />
    </Route>
  </Route>
</Router>

```

### New account creation, login, and guest/demo login
![login]

#### Sample Authentication Code Snippets
```ruby
class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end

end

class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
			login(@user)
			render "api/users/show"
		else
			render(
        json: ["Invalid username/password combination"],
        status: 401
      )
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end

end

class Api::SessionsController < ApplicationController

	def create
		@user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
			login(@user)
			render "api/users/show"
		else
			render(
        json: ["Invalid username/password combination"],
        status: 401
      )
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end

end

```

### Discover feed on home page
- [ ] Discover all pins with infinite scroll feature. Load 20 pins per scroll.
![feed]

#### Sample Pin Index Component Code with Masonry Snippets
```javascript
class Pins extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchAllPins(this.state.page);
  }

  ...

  render() {
    ...

    return (
      <Masonry
        className="pins-container"
        elementType={'ul'}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false} >
        {pins}
    </Masonry>

    );
  }
}
```

### Profile
- [ ] Display user details: boards, pins, followers and following.
![user]

### Boards and Pins
- [ ] Board detail page.
![board_pins]

- [ ] Pin Detail modal.
![pin_details]

#### Sample react-modal Code Snippets
```javascript

...

let detailPinStyle = {
  overlay : {
  position        : 'fixed',
  top             : 0,
  left            : 0,
  right           : 0,
  bottom          : 0,
  backgroundColor : 'rgba(255,255,255, 0.85)'
  },
  content : {
    borderRadius: '4px',
    bottom: 'auto',
    maxHeight: '90%',
    left: '50%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    minWidth: '10rem',
    width: '600px',
    maxWidth: '60%',
    backgroundColor : 'rgba(255, 255, 255, 1)',
    boxShadow : '3px 3px 10px black',
  }
};

...

<Modal className='PinModal'
  isOpen={this.state.openPinDetailModal}
  onRequestClose={this.closePinDetailModal.bind(this)}
  style={detailPinStyle}>
  <div className="pin-detail-block">
    <a className='pin-url' href={this.props.pin.url} target="_blank">
      <div className='picture-block'>
        <img className='pin-picture' src={this.props.pin.image_url} />
      </div>
    </a>
    <div className='detail-block'>
      <div className='pin-title'>
        {this.props.pin.title}
      </div>
      <div className='pin-description'>
        {this.props.pin.description}
      </div>
      <Link to={this.props.pin.user.username}>
        <img className="profile-pic" src={this.props.pin.user.image_url} />
      </Link>

      <div className="url-block">
        <p className='board-title'>{this.props.pin.board.title}</p>
        <a className='pin-url' href={this.props.pin.url} target="_blank">
          {pinShortUrl}
        </a>
      </div>
    </div>
  </div>
</Modal>

...

```

### New Board/Pin
- [ ] New Board/Pin Button always stays at the right-bottom corner wherever you are.
![new]


### Auto scrape images from the website you type in!
![new_pin]


### Follows (followers/following users)
- [ ] Display your followers/following.
![user_followers]


### Infinite Scroll

#### Infinite Scroll Code with Kaminari Snippets

```javascript

...

listenForScroll() {
  $(window).off("scroll"); // remove previous listeners
  let throttledCallback = _.throttle(this.nextPage.bind(this), 20);
  $(window).on("scroll", throttledCallback);
}

nextPage() {
  let view = this;
  if ($(window).scrollTop() > $(document).height() - $(window).height() - 10) {
    if (this.state.page < this.state.total_pages) {
      this.setState({page: this.state.page + 1});
      this.props.fetchAllPins(this.state.page);
    }
  }
}

render() {

  ...

  this.listenForScroll();
  return (
    <Masonry
      className="pins-container"
      elementType={'ul'}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false} >
      {pins}
  </Masonry>
  );
}
```

### Realtime Search
- [ ] Search the pin(s) its title or description matches the keyword.
![realtime_search]

#### Sample Realtime Search Snippets

```ruby

class Api::PinsController < ApplicationController

  LIMIT = 20

  def index
    if params[:board_id]
      @pins = Pin.where(board_id: params[:board_id])
    elsif params[:user_id]
      @pins = Pin.where(user_id: params[:user_id])
    elsif params[:keyword]
      like_keyword = "%#{params[:keyword]}%".downcase
      @pins = Pin.where("LOWER(TITLE) LIKE ? OR LOWER(DESCRIPTION) LIKE ?", like_keyword, like_keyword)
    else
      @pins = Pin.all.order("CREATED_AT  DESC").page(params[:page]).per(LIMIT)
    end
    render :index

	end

  ...

end

```

[login]: ./docs/screenshots/login.png
[feed]: ./docs/screenshots/feeds.png
[user]: ./docs/screenshots/user.png
[board_pins]: ./docs/screenshots/board_pins.png
[pin_details]: ./docs/screenshots/pin_details.png
[new]: ./docs/screenshots/new.png
[new_pin]: ./docs/screenshots/new_pin.png
[user_followers]: ./docs/screenshots/user_followers.png
[realtime_search]: ./docs/screenshots/realtime_search.png

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
