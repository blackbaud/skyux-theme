export class ThemePlatformHelper {
  public static shouldSkipVisualTests() {
    const idxPlatformKey = process.argv.indexOf('--platform');
    const idxPlatformVSTS = process.argv.indexOf('vsts');

    // Minimist sure is nice
    if (idxPlatformKey > -1 && idxPlatformVSTS > -1 && idxPlatformVSTS === (idxPlatformKey + 1)) {
      console.warn('Platform is VSTS - skipping visual test.');
      return true;
    }
  }
}
