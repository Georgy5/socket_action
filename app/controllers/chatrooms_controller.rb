class ChatroomsController < ApplicationController
  def show
    @Chatroom = Chatroom.find(params[:id])
  end
end
