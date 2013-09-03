class MultifamilyController < ApplicationController

  def index
    @multifamily = Multifamily.all
    render :json => @multifamily
  end

end


