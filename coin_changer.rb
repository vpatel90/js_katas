require "minitest/test"
require "minitest/autorun"


class CoinChanger
  attr_accessor :coins
  def initialize(total)
    @total = total
    @coins = []

    find_quarters(@total)
    find_dimes(@total)
    find_nickles(@total)
    find_pennies(@total)
  end

  def find_pennies(total)
    total.times do
      @coins << 1
      @total -= 1
    end
  end

  def find_nickles(total)
    (total/5).times do
      @coins << 5
      @total -= 5
    end
  end

  def find_dimes(total)
    (total/10).times do
      @coins << 10
      @total -= 10
    end
  end

  def find_quarters(total)
    (total/25).times do
      @coins << 25
      @total -= 25
    end
  end

end

class TestCoinChanger < MiniTest::Test

  def test_pennies
    cc = CoinChanger.new(4)
    expected = [1,1,1,1]
    assert_equal(expected, cc.coins)
  end

  def test_nickles
    cc = CoinChanger.new(5)
    expected = [5]
    assert_equal(expected, cc.coins)
  end

  def test_nickles_pennies
    cc = CoinChanger.new(7)
    expected = [5,1,1]
    assert_equal(expected, cc.coins)
  end

  def test_dimes
    cc = CoinChanger.new(20)
    expected = [10,10]
    assert_equal(expected, cc.coins)
  end

  def test_dimes_nickles_pennies
    cc = CoinChanger.new(17)
    expected = [10,5,1,1]
    assert_equal(expected, cc.coins)
  end

  def test_all
    cc = CoinChanger.new(99)
    expected = [25,25,25,10,10,1,1,1,1]
    assert_equal(expected, cc.coins)

  end

end
