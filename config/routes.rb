Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :comments, :only => [:create, :destroy]
  resources :posts do
    member do
      put "like", to: "posts#upvote"
    end
  end
  get 'tags/:tag', to: 'posts#index', as: :tag
  get 'contact', to: 'posts#contact'
  get 'shortcuts', to: 'posts#shortcuts'
  get 'about', to: 'posts#about'
  root "posts#index"
end
