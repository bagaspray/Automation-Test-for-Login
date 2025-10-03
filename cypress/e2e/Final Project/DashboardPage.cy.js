import loginPOM from '../../support/FinalProject_commands/Login/loginPOM'
import dashboardPOM from '../../support/FinalProject_commands/Dashboard/dashboardPOM'
import interceptLogin from '../../support/FinalProject_commands/Login/interceptLogin'
import interceptDashboard from '../../support/FinalProject_commands/Dashboard/interceptDashboard'
import dataFinal from '../../fixtures/dataFinal.json'

describe('Dashbpard (Directory) Scenario', () => {
    beforeEach(() => {
        interceptLogin.timeAtWork()
        loginPOM.visit_login()
        loginPOM.login(dataFinal.valid_username, dataFinal.valid_password)
        interceptLogin.waitTimeAtWork
        loginPOM.login_success
    })

    it('TC001 - Navigate to Directory Page After Login', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        // ✅ Expected result
        dashboardPOM.visit_directory()
    })

    it('TC002 - User clicks Help button on Directory Page', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.click_help()
        // ✅ Expected result
        dashboardPOM.visit_directory()
    })
    
    it('TC003 - User clicks Up Triangle button on Directory Page', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.click_triangle()
        // ✅ Expected result
        dashboardPOM.up_triangle_button()
    })

    it('TC004 - User clicks Down Triangle button on Directory Page', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.click_triangle()
        // ✅ Expected result
        dashboardPOM.down_triangle_button()
    })

    it('TC005 - Validate Job Title Dropdown functionality and shows list of choices', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        // ✅ Expected result
        dashboardPOM.select_job(dataFinal.jobtitle)
    })

    it('TC006 - Verify Job Title dropdown displays options and triggers correct action on Search button click', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.select_job(dataFinal.jobtitle)
        dashboardPOM.click_search()
        // ✅ Expected result
        dashboardPOM.assert_searchJobTitle()
    })

    it('TC007 - Validate Locations Dropdown functionality and shows list of choices', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        // ✅ Expected result
        dashboardPOM.select_location(dataFinal.location)
    })

    it('TC008 - Verify Locations dropdown displays options and triggers correct action on Search button click', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.select_location(dataFinal.location)
        dashboardPOM.click_search()
        // ✅ Expected result
        dashboardPOM.assert_searchLocation()
    })

    it('TC009 - Verify Job Title and Locations dropdown displays options and triggers correct action on Search button click', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.select_job(dataFinal.jobtitle)
        dashboardPOM.select_location(dataFinal.location)
        dashboardPOM.click_search()
        // ✅ Expected result
        dashboardPOM.assert_searchJobTitle()
        dashboardPOM.assert_searchLocation()
    })

    it('TC010 - Verify Job Title dropdown displays options and triggers correct action on Reset button click', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.select_job(dataFinal.jobtitle)
        dashboardPOM.click_reset()
        // ✅ Expected result
        dashboardPOM.assert_reset()
    })

    it('TC011 - Verify Locations dropdown displays options and triggers correct action on Reset button click', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.select_location(dataFinal.location)
        dashboardPOM.click_reset()
        // ✅ Expected result
        dashboardPOM.assert_reset()
    })

    it('TC012 - Verify Job Title and Locations dropdown displays options and triggers correct action on Reset button click', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.select_job(dataFinal.jobtitle)
        dashboardPOM.select_location(dataFinal.location)
        dashboardPOM.click_reset()
        // ✅ Expected result
        dashboardPOM.assert_reset()
    })

    it('TC013 - Verify a Valid employee name on Search button click', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.inputname(dataFinal.employeeName)
        dashboardPOM.click_search()
        // ✅ Expected result
        dashboardPOM.assert_name(dataFinal.employeeName)
    })

    it('TC014 - Verify an Invalid employee name on Search button click', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.inputname(dataFinal.employeeNameInvalid)
        dashboardPOM.click_search()
        // ✅ Expected result
        dashboardPOM.assert_invalidName()
    })

    it('TC015 - Verify Reset button on employee name placeholder', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.inputname(dataFinal.employeeName)
        dashboardPOM.click_reset()
        // ✅ Expected result
        dashboardPOM.assert_resetName()
    })

    it('TC016 - Verify Job Title, Locations, and Employee name on Reset button click', () => {
        interceptDashboard.viewDirectory()
        dashboardPOM.click_directory()
        interceptDashboard.waitViewDirectory()
        dashboardPOM.visit_directory()

        dashboardPOM.inputname(dataFinal.employeeName)
        dashboardPOM.select_job(dataFinal.jobtitle)
        dashboardPOM.select_location(dataFinal.location)
        dashboardPOM.click_reset()
        // ✅ Expected result
        dashboardPOM.assert_resetName()
        dashboardPOM.assert_reset()
    })
})