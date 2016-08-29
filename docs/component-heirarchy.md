                ## Component Hierarchy

** App **
  * AuthForm
    * LoginForm
    * SignUpForm

  * HomeContainer
    - CreateButton
      - NewPin
      - NewBoard

  * NavBarContainer
    - Logo
    - ProfilePicture
    - Search (Bonus)
    - Notification (Bonus)
    - Category (Tags) (Bonus)

  * PinsContainer
    * PinItem
      * PinDetail

  * UserContainer
    - Logout
    * BoardsContainer
      * NewForm
      * EditForm
      * BoardDetail
        * PinsContainer
          * PinItem
            * PinDetail
    * FollowsContainer
      - Followers
      - Followings
    * PinsContainer
      * PinItem
        * PinDetail
## Routes

|Path                         | Component           |
|-----------------------------|---------------------|
| "/new"                      | "AuthFormContainer" |
| "/login"                    | "AuthFormContainer" |
| "/"                         | "HomeContainer"     |
| "/users/:id"                | "UserContainer"     |
| "/pins/"                    | "PinsContainer"     |
| "/pins/:pinId"              | "PinDetail"         |
| "/pins/new"                 | "NewPin"            |
| "/boards/"                  | "BoardsContainer"   |
| "/boards/:boardId"          | "BoardDetail"       |
| "/boards/:boardId/new"      | "NewBoard"          |
| "/boards/:boardId/edit"     | "EditBoard"         |
| "/users/:userId/followers"  | "FollowsContainer"  |
| "/users/:userId/followings" | "FollowsContainer"  |
| "/search/"                  | "SearchContainer"   |
