const path = require('path')

describe('E2Eテスト', () => {
  beforeEach(async () => {
    await page.goto('file://' + path.resolve(__dirname, '../e2e_sample_index.html'))
  })

  it('ページのタイトルが表示される', async() => {
    await page.waitForSelector('#title', { visible: true })
    await expect(page).toMatchElement(
      '#title', { text: 'ページタイトル' }
    )
  })
})
