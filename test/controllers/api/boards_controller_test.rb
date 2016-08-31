require 'test_helper'

class Api::BoardsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_boards_index_url
    assert_response :success
  end

  test "should get create" do
    get api_boards_create_url
    assert_response :success
  end

  test "should get delete" do
    get api_boards_delete_url
    assert_response :success
  end

  test "should get update" do
    get api_boards_update_url
    assert_response :success
  end

  test "should get show" do
    get api_boards_show_url
    assert_response :success
  end

end
