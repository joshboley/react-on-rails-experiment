# frozen_string_literal: true

class UiController < ApplicationController
  layout "ui"

  def index
    @default_props = { todos: { todoList: Todo.all } }
  end
end
