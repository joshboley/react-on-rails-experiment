class Api::TodosController < ActionController::Base
    skip_before_action :verify_authenticity_token
    respond_to? :json

    def index
        @todos = Todo.all
        render json: @todos.to_json
    end

    def show
        render json: Todo.find(params[:id]).to_json
    end

    def create
        @todo = Todo.new(todo_params)
        @todo.save
        render json: @todo.to_json
    end

    def update
        @todo = Todo.find(params[:id])
        @todo.update(todo_params)
        render json: @todo.to_json
    end

    def destroy
        @todo = Todo.find(params[:id])
        @todo.destroy
        head :no_content
    end

    private
        def todo_params
            params.require(:todo).permit(:title, :completed)
        end

end