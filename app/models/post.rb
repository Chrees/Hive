class Post < ActiveRecord::Base
  acts_as_votable
  belongs_to :user

  has_attached_file :image, styles: { :thumb => "222x256#", :medium => "1600x1600>" }, convert_options: { :thumb => "-gravity center -crop 500x500+0+0 -quality 80", :medium => '-quality 80' }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
