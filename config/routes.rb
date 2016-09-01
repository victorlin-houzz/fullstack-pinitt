Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
    end
    resources :boards, only: [:index, :show, :create, :update, :destroy]
    resources :pins, only: [:index, :show, :create, :update, :destroy] do
    end
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
