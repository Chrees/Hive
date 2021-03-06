class PostsController < ApplicationController
  before_action :find_post, only: [:show, :edit, :update, :destroy, :upvote]
  before_action :authenticate_user!, except: [:index, :show, :upvote, :contact, :shortcuts, :about]

  def new
    @post = current_user.posts.build
  end

  def create
    @post = current_user.posts.build(post_params)
    if @post.save
      redirect_to @post, notice: "Successfully created new post"
    else
      render 'new'
    end
  end

  def update
    if @post.update(post_params)
      redirect_to @post, notice: "Post was successfully updated!"
    else
      render 'edit'
    end
  end

  def edit
  end

  def destroy
    @post.destroy
    redirect_to root_path
  end

  def upvote
    @post.upvote_by current_user
    env["HTTP_REFERER"] += '#bottom'
    redirect_to :back
  end

  def index
    if params[:category].present?
      @category_id = Category.find_by(name: params[:category]).id
      @posts = Post.where(category_id: @category_id).order("created_at DESC").page(params[:page]).per(56)
      @is_categorized = true
    elsif params[:tag]
      @posts = Post.tagged_with(params[:tag]).page(params[:page]).per(56).order("created_at DESC")
      @tag = params[:tag]
    elsif params[:search] && params[:search].size != 0
      @posts = Post.tagged_with(params[:search]).page(params[:page]).per(56).order("created_at DESC")
    else
      @posts = Post.all.order("created_at DESC").page(params[:page]).per(28)
      @is_categorized = true
    end
  end

  def show
    if current_user != nil
      @comments = @post.comment_threads.order('created_at desc')
      @new_comment = Comment.build_from(@post, current_user.id, "")
    end
  end

  def about
  end

  def shortcuts
  end

  def contact
  end

  private

  def post_params
    params.require(:post).permit(:source, :description, :image, :category_id, :tag_list, :css)
  end

  def find_post
    @post = Post.find(params[:id])
  end
end
